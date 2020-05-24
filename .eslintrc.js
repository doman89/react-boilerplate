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
		'react-hooks',
		'@typescript-eslint'
	],
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
	// https://eslint.org/docs/rules/[RULE-NAME]
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/[RULE-NAME].md
	// https://github.com/yannickcr/eslint-plugin-react
	'rules': {
		'react/boolean-prop-naming': 'off',
		'react/button-has-type': 'warn',
		'react/default-props-match-prop-types': 'off',
		'react/destructuring-assignment': 'off',
		'react/display-name': 'off',
		'react/forbid-component-props': 'off',
		'react/forbid-dom-props': 'off',
		'react/forbid-elements': 'off',
		'react/forbid-foreign-prop-types': 'off',
		'react/forbid-prop-types': 'off',
		'react/function-component-definition': 'off',
		'react/no-access-state-in-setstate': 'error',
		'react/no-adjacent-inline-element': 'off',
		'react/no-array-index-key': 'error',
		'react/no-children-prop': 'warn',
		'react/no-danger': 'error',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'off',
		'react/no-direct-mutation-state': 'error',
		'react/no-find-dom-node': 'warn',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': [
			'warn',
			{
				ignoreStateless: true,
			},
		],
		'react/no-redundant-should-component-update': 'warn',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-typos': 'off',
		'react/no-string-refs': 'warn',
		'react/no-this-in-sfc': 'error',
		'react/no-unescaped-entities': 'warn',
		'react/no-unknown-property': 'warn',
		'react/no-unsafe': 'error',
		'react/no-unused-prop-types': 'off',
		'react/no-unused-state': 'warn',
		'react/no-will-update-set-state': 'off',
		'react/prefer-es6-class': 'error',
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': 'warn',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'warn',
		'react/require-default-props': 'off',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'warn',
		'react/sort-comp': 'off',
		'react/sort-prop-types': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/style-prop-object': 'warn',
		'react/void-dom-elements-no-children': 'error',
		'react/jsx-boolean-value': 'off',
		'react/jsx-child-element-spacing': 'off',
		'react/jsx-closing-bracket-location': 'warn',
		'react/jsx-closing-tag-location': 'warn',
		'react/jsx-curly-brace-presence': [
			'warn',
			{
				props: 'never',
				children: 'never',
			},
		],
		'react/jsx-curly-newline': [
			'warn',
			{
				multiline: 'consistent',
				singleline: 'consistent',
			},
		],
		'react/jsx-curly-spacing': [
			'warn',
			{
				'when': 'never',
				'children':	true,
			},
		],
		'react/jsx-equals-spacing': [
			'warn',
			'never'
		],
		'react/jsx-filename-extension': 'off',
		'react/jsx-first-prop-new-line': [
			'warn',
			'multiline',
		],
		'react/jsx-fragments': 'off',
		'react/jsx-handler-names': 'warn',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-key': 'warn',
		'react/jsx-max-depth': 'off',
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-no-bind': 'warn',
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': 'warn',
		'react/jsx-no-literals': 'off',
		'react/jsx-no-script-url': 'error',
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': 'warn',
		'react/jsx-one-expression-per-line': [
			'warn',
			{ 
				'allow': 'literal',
			},
		],
		'react/jsx-pascal-case': 'warn',
		'react/jsx-props-no-multi-spaces': 'warn',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-default-props': 'warn',
		'react/jsx-sort-props': 'warn',
		'react/jsx-space-before-closing': 'warn',
		'react/jsx-tag-spacing': 'off',
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': 'warn',
		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
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
		'@typescript-eslint/interface-name-prefix': 'off',
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
		'@typescript-eslint/no-extra-non-null-assertion': 'off',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': [
			'warn',
			{ignoreVoid: true},
		],
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
		'@typescript-eslint/strict-boolean-expressions': 'off',
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
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression *']
			},
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