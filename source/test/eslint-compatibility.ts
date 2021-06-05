import path from 'path';
import test from 'ava';
import execa from 'execa';

test('`expectType` is compatible with eslint @typescript-eslint/no-unsafe-call rule', t => {
	try {
		execa.sync(
			'node_modules/.bin/eslint',
			['source/test/fixtures/eslint-compatibility', '--no-ignore'],
			{
				cwd: path.join(__dirname, '../../')
			}
		);

		t.fail('eslint should have found an error!');
	} catch (error: unknown) {
		if (!error) {
			t.fail('Thrown error is falsy!');
		}

		const execaError = error as execa.ExecaError;

		const outLines = execaError.stdout.trim().split('\n');

		t.regex(outLines[0], /fixtures[/\\]eslint-compatibility[/\\]index.test-d.ts$/, 'Lint error found in unexpected file');
		t.is(outLines[1], '  9:1  error  Unsafe call of an `any` typed value  @typescript-eslint/no-unsafe-call');
		t.is(outLines[3], '✖ 1 problem (1 error, 0 warnings)');
	}
});
