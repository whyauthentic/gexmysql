import sql_execute from './db/execute.js';
import sql_query from './db/query.js';
import sql_transaction from './db/transaction.js';

let deprecated = (invokingResource) => {
  setTimeout(() => {
    console.log(
      `^3[WARNING] ${invokingResource} triggered a deprecated function! Exports from prior to v1.9.0 will be removed in a future update.
      Refer to the readme for information on updating.^0`
    );
  }, 500);
  deprecated = undefined;
};

global.exports('execute', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_query('', invokingResource, query, parameters, cb);
});

global.exports('executeSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_query('', invokingResource, query, parameters);
});

global.exports('single', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_query('single', invokingResource, query, parameters, cb);
});

global.exports('singleSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_query('single', invokingResource, query, parameters);
});

global.exports('scalar', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_query('scalar', invokingResource, query, parameters, cb);
});

global.exports('scalarSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_query('scalar', invokingResource, query, parameters);
});

global.exports('update', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_query('update', invokingResource, query, parameters, cb);
});

global.exports('updateSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_query('update', invokingResource, query, parameters);
});

global.exports('insert', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_query('insert', invokingResource, query, parameters, cb);
});

global.exports('insertSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_query('insert', invokingResource, query, parameters);
});

global.exports('transaction', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_transaction(invokingResource, query, parameters, cb);
});

global.exports('transactionSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_transaction(invokingResource, query, parameters);
});

global.exports('prepare', (query, parameters, cb, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  sql_execute(invokingResource, query, parameters, cb);
});

global.exports('prepareSync', (query, parameters, invokingResource = GetInvokingResource()) => {
  if (deprecated !== undefined) deprecated(invokingResource);
  return sql_execute(invokingResource, query, parameters);
});
