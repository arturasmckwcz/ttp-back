import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answer = {
  __typename?: 'Answer';
  answer: Scalars['String'];
  id: Scalars['Int'];
  points: Scalars['Int'];
};

export type AnswerInput = {
  answer: Scalars['String'];
  id: Scalars['Int'];
  points: Scalars['Int'];
  questionID: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setQuestionsAndAnswers?: Maybe<Scalars['Boolean']>;
};


export type MutationSetQuestionsAndAnswersArgs = {
  questionsAndAnswers: QuestionsAndAnswers;
};

export type Query = {
  __typename?: 'Query';
  questionsWithAnswers?: Maybe<Array<Maybe<QuestionWithAnswers>>>;
  verdict?: Maybe<Verdict>;
};


export type QueryVerdictArgs = {
  score?: InputMaybe<Scalars['Int']>;
};

export type Question = {
  id: Scalars['Int'];
  question: Scalars['String'];
};

export type QuestionWithAnswers = {
  __typename?: 'QuestionWithAnswers';
  answers?: Maybe<Array<Answer>>;
  id: Scalars['Int'];
  question: Scalars['String'];
};

export type QuestionsAndAnswers = {
  answers?: InputMaybe<Array<AnswerInput>>;
  questions?: InputMaybe<Array<Question>>;
};

export type Verdict = {
  __typename?: 'Verdict';
  score: Scalars['Int'];
  verdict: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Answer: ResolverTypeWrapper<Answer>;
  AnswerInput: AnswerInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Question: Question;
  QuestionWithAnswers: ResolverTypeWrapper<QuestionWithAnswers>;
  QuestionsAndAnswers: QuestionsAndAnswers;
  String: ResolverTypeWrapper<Scalars['String']>;
  Verdict: ResolverTypeWrapper<Verdict>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Answer: Answer;
  AnswerInput: AnswerInput;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Question: Question;
  QuestionWithAnswers: QuestionWithAnswers;
  QuestionsAndAnswers: QuestionsAndAnswers;
  String: Scalars['String'];
  Verdict: Verdict;
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  setQuestionsAndAnswers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetQuestionsAndAnswersArgs, 'questionsAndAnswers'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  questionsWithAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionWithAnswers']>>>, ParentType, ContextType>;
  verdict?: Resolver<Maybe<ResolversTypes['Verdict']>, ParentType, ContextType, Partial<QueryVerdictArgs>>;
}>;

export type QuestionWithAnswersResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionWithAnswers'] = ResolversParentTypes['QuestionWithAnswers']> = ResolversObject<{
  answers?: Resolver<Maybe<Array<ResolversTypes['Answer']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerdictResolvers<ContextType = any, ParentType extends ResolversParentTypes['Verdict'] = ResolversParentTypes['Verdict']> = ResolversObject<{
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  verdict?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Answer?: AnswerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuestionWithAnswers?: QuestionWithAnswersResolvers<ContextType>;
  Verdict?: VerdictResolvers<ContextType>;
}>;

