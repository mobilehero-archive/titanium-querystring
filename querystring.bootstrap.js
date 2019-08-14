// code for SDK < 8.1.0.GA
// require('/ti.internal/extensions/binding')('querystring', '/node_modules/@titanium/querystring');
// require('/ti.internal/extensions/binding')('qs', '/node_modules/@titanium/querystring');

// Code for SDK >= 8.1.0.GA
global.binding.register('querystring', require('@titanium/querystring'));
global.binding.register('qs', require('@titanium/querystring'));

