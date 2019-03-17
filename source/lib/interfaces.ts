export interface Context {
	cwd: string;
	pkg: any;
	typingsFile: string;
	testFile: string;
}

export enum DiagnosticCode {
	AwaitIsOnlyAllowedInAsyncFunction = 1308,
	PropertyDoesNotExistOnType = 2339,
	ArgumentTypeIsNotAssignableToParameterType = 2345,
	CannotAssignToReadOnlyProperty = 2540
}

export interface Diagnostic {
	fileName: string;
	message: string;
	severity: 'error' | 'warning';
	line?: number;
	column?: number;
}

export interface Position {
	start: number;
	end: number;
}
