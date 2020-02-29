module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'project': './tsconfig.json',
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	// https://eslint.org/docs/rules/[RULE-NAME]
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/[RULE-NAME].md
	'rules': {
		// @typescript-eslint/eslint-plugin extension rules
		'@typescript-eslint/brace-style': [
			'warn',
			'1tbs', 
			{ 
				'allowSingleLine': false, 
			},
		],
		'@typescript-eslint/comma-spacing': [
			'warn', 
			{ 
				'before': false, 
				'after': true,
			}
		],
		'@typescript-eslint/default-param-last': 'off',
		'@typescript-eslint/func-call-spacing': [
			'error', 
			'never',
		],
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-magic-numbers': [
			'warn',
			{
				'ignore': [0, 1],
				'ignoreArrayIndexes': true,
				'ignoreNumericLiteralTypes': true,
				'ignoreReadonlyClassProperties': true,
				'ignoreEnums': true,
			}
		],
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				caughtErrors: 'none',
				vars: 'all',
				ignoreRestSiblings: true,
			},
		],
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/quotes': [
			'warn',
			'single',
			{
				allowTemplateLiterals: true,
			},
		],
		'@typescript-eslint/require-await': 'warn',
		'@typescript-eslint/return-await': 'warn',
		'@typescript-eslint/semi': [
			'error',
			'always',
		],
		'@typescript-eslint/space-before-function-paren': [
			'warn',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always',
			},
		],
		// @typescript-eslint/eslint-plugin supported rules
		'@typescript-eslint/adjacent-overload-signatures': 'warn',
		'@typescript-eslint/array-type': 'warn',
		'@typescript-eslint/await-thenable': 'warn',
		'@typescript-eslint/ban-ts-ignore': 'warn',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface',
		],
		'@typescript-eslint/explicit-function-return-type': 'off', // overrides
		'@typescript-eslint/explicit-member-accessibility': 'off', // overrides
		'@typescript-eslint/explicit-module-boundary-types':'off', // overrides
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {delimiter: 'semi', requireLast: true},
				singleline: {delimiter: 'semi', requireLast: false},
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {delimiter: 'semi', requireLast: true},
				singleline: {delimiter: 'semi', requireLast: false},
			},
		],
		'@typescript-eslint/member-ordering': [
			'warn',
			{default: ['field', 'constructor', 'method']},
		],
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'variableLike',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'variable',
				types: ['boolean'],
				format: ['PascalCase'],
				prefix: ['is', 'was', 'should', 'has', 'can', 'did', 'will'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'property',
				types: ['boolean'],
				format: ['PascalCase'],
				prefix: ['is', 'was', 'should', 'has', 'can', 'did', 'will'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'parameterProperty',
				types: ['boolean'],
				format: ['PascalCase'],
				prefix: ['is', 'was', 'should', 'has', 'can', 'did', 'will'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'accessor',
				types: ['boolean'],
				format: ['PascalCase'],
				prefix: ['is', 'was', 'should', 'has', 'can', 'did', 'will'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'memberLike',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
			  'allowSingleExtends': false
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error', 
			{ 
				'ignoreRestArgs': true 
			},
		],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-inferrable-types': 'warn',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': [
			'warn',
			{checksConditionals: false, checksVoidReturn: false},
		],
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'warn',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				ignoreArgsIfArgsAfterAreUsed: true,
			},
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-as-const': 'off',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-includes': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'warn',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': [
			'warn',
			{
				allowBoolean: true,
				allowNullable: true,
				allowNumber: true,
			},
		],
		'@typescript-eslint/strict-boolean-expressions': 'warn',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/triple-slash-reference': [
			'warn',
			{
				path: 'never', 
				types: 'never', 
				lib: 'never',
			},
		],
		'@typescript-eslint/type-annotation-spacing': [
			'warn',
			{
				overrides: {
					arrow: {
						after: true,
						before: true,
					},
					colon: {
						after: true,
						before: false,
					},
				},
			},
		],
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': [
			'error',
			{
				ignoreStatic: true,
			}
		],
		'@typescript-eslint/unified-signatures': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	'overrides': [
		{
			'files': ['*.ts', '*.tsx'],
			'rules': {
				'@typescript-eslint/explicit-function-return-type': [
					'warn',
					{
						allowExpressions: true,
					},
				],
				'@typescript-eslint/explicit-member-accessibility': [
					'warn',
					{ 
						accessibility: 'explicit',
					},
				],
				'@typescript-eslint/explicit-module-boundary-types': [
					'warn',
					{
						allowTypedFunctionExpressions: true,
						allowHigherOrderFunctions: true,
						allowDirectConstAssertionInArrowFunctions: true,
					},
				],
			}
		  }
	]
};