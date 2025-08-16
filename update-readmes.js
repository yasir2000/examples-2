#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Get all example directories
function getExampleDirectories() {
  const items = fs.readdirSync('.', { withFileTypes: true });
  return items
    .filter(item => item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules')
    .map(item => item.name)
    .filter(name => !['node_modules', '.git', '.github'].includes(name));
}

// Parse serverless.yml to understand the service
function parseServerlessConfig(dir) {
  const serverlessPath = path.join(dir, 'serverless.yml');
  if (!fs.existsSync(serverlessPath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(serverlessPath, 'utf8');
    return yaml.load(content);
  } catch (error) {
    console.log(`Error parsing ${serverlessPath}: ${error.message}`);
    return null;
  }
}

// Detect runtime/language from serverless.yml
function detectLanguageAndRuntime(config) {
  if (!config || !config.provider) return { language: 'unknown', runtime: 'unknown' };

  const runtime = config.provider.runtime || 'unknown';

  // Map runtime to language
  const languageMap = {
    'nodejs': 'JavaScript',
    'node': 'JavaScript',
    'python': 'Python',
    'go': 'Go',
    'java': 'Java',
    'dotnet': 'C#',
    'ruby': 'Ruby',
    'rust': 'Rust'
  };

  for (const [key, lang] of Object.entries(languageMap)) {
    if (runtime.toLowerCase().includes(key)) {
      return { language: lang, runtime };
    }
  }

  return { language: 'unknown', runtime };
}

// Check if package.json exists and what dependencies it has
function checkPackageJson(dir) {
  const packagePath = path.join(dir, 'package.json');
  if (!fs.existsSync(packagePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(packagePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

// Analyze each example
function analyzeExample(dir) {
  console.log(`\nAnalyzing: ${dir}`);

  const config = parseServerlessConfig(dir);
  const packageJson = checkPackageJson(dir);
  const { language, runtime } = detectLanguageAndRuntime(config);

  const analysis = {
    directory: dir,
    hasServerlessYml: !!config,
    hasPackageJson: !!packageJson,
    language,
    runtime,
    provider: config?.provider?.name || 'unknown',
    functions: config?.functions ? Object.keys(config.functions) : [],
    events: []
  };

  // Extract event types
  if (config?.functions) {
    Object.values(config.functions).forEach(func => {
      if (func.events) {
        func.events.forEach(event => {
          const eventType = Object.keys(event)[0];
          if (!analysis.events.includes(eventType)) {
            analysis.events.push(eventType);
          }
        });
      }
    });
  }

  console.log(`  Language: ${language} (${runtime})`);
  console.log(`  Provider: ${analysis.provider}`);
  console.log(`  Functions: ${analysis.functions.join(', ')}`);
  console.log(`  Events: ${analysis.events.join(', ')}`);

  return analysis;
}

// Main execution
function main() {
  const examples = getExampleDirectories();
  console.log(`Found ${examples.length} example directories`);

  const analyses = [];

  examples.forEach(dir => {
    try {
      const analysis = analyzeExample(dir);
      analyses.push(analysis);
    } catch (error) {
      console.error(`Error analyzing ${dir}: ${error.message}`);
    }
  });

  // Write analysis to file
  fs.writeFileSync('example-analysis.json', JSON.stringify(analyses, null, 2));
  console.log('\nAnalysis written to example-analysis.json');

  // Summary
  const byLanguage = {};
  const byProvider = {};

  analyses.forEach(analysis => {
    byLanguage[analysis.language] = (byLanguage[analysis.language] || 0) + 1;
    byProvider[analysis.provider] = (byProvider[analysis.provider] || 0) + 1;
  });

  console.log('\nSummary:');
  console.log('By Language:', byLanguage);
  console.log('By Provider:', byProvider);
}

if (require.main === module) {
  main();
}

module.exports = { analyzeExample, detectLanguageAndRuntime, parseServerlessConfig };
