import { GraphQLClient } from 'graphql-request';
// import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
  /** update multiples rows of table: "todo" */
  update_todo_many?: Maybe<Array<Maybe<Todo_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_ManyArgs = {
  updates: Array<Todo_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table in a streaming manner: "todo" */
  todo_stream: Array<Todo>;
};


export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTodo_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todo_Stream_Cursor_Input>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  complete?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<Todo_Bool_Exp>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<Todo_Bool_Exp>>;
  complete?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = 'todo_pkey'
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on_conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns?: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** Ordering options when selecting data from "todo". */
export type Todo_Order_By = {
  complete?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "todo" */
export type Todo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todo_Stream_Cursor_Value_Input = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Todo_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todo_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'query_root', todo: Array<{ __typename?: 'todo', id: any, name?: string | null, complete?: boolean | null }> };

export type GetTodoByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTodoByIdQuery = { __typename?: 'query_root', todo_by_pk?: { __typename?: 'todo', complete?: boolean | null, created_at: any, id: any, name?: string | null } | null };

export type CreateTodoMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTodoMutation = { __typename?: 'mutation_root', insert_todo?: { __typename?: 'todo_mutation_response', returning: Array<{ __typename?: 'todo', id: any, name?: string | null, complete?: boolean | null }> } | null };

export type UpdateTodoMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateTodoMutation = { __typename?: 'mutation_root', update_todo?: { __typename?: 'todo_mutation_response', returning: Array<{ __typename?: 'todo', complete?: boolean | null, created_at: any, id: any, name?: string | null }> } | null };

export type DeleteTodoMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type DeleteTodoMutation = { __typename?: 'mutation_root', delete_todo?: { __typename?: 'todo_mutation_response', returning: Array<{ __typename?: 'todo', created_at: any, complete?: boolean | null, id: any, name?: string | null }> } | null };


export const GetTodosDocument = gql`
    query GetTodos {
  todo(order_by: {created_at: asc}) {
    id
    name
    complete
  }
}
    `;
export const GetTodoByIdDocument = gql`
    query GetTodoById($id: uuid!) {
  todo_by_pk(id: $id) {
    complete
    created_at
    id
    name
  }
}
    `;
export const CreateTodoDocument = gql`
    mutation CreateTodo($name: String) {
  insert_todo(objects: {name: $name}) {
    returning {
      id
      name
      complete
    }
  }
}
    `;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: uuid, $complete: Boolean) {
  update_todo(where: {id: {_eq: $id}}, _set: {complete: $complete}) {
    returning {
      complete
      created_at
      id
      name
    }
  }
}
    `;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: uuid) {
  delete_todo(where: {id: {_eq: $id}}) {
    returning {
      created_at
      complete
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

// export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
//   return {
//     GetTodos(variables?: GetTodosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTodosQuery> {
//       return withWrapper((wrappedRequestHeaders) => client.request<GetTodosQuery>(GetTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTodos', 'query');
//     },
//     GetTodoById(variables: GetTodoByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTodoByIdQuery> {
//       return withWrapper((wrappedRequestHeaders) => client.request<GetTodoByIdQuery>(GetTodoByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTodoById', 'query');
//     },
//     CreateTodo(variables?: CreateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTodoMutation> {
//       return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateTodo', 'mutation');
//     },
//     UpdateTodo(variables?: UpdateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTodoMutation> {
//       return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateTodo', 'mutation');
//     },
//     DeleteTodo(variables?: DeleteTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteTodoMutation> {
//       return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteTodo', 'mutation');
//     }
//   };
// }
// export type Sdk = ReturnType<typeof getSdk>;
