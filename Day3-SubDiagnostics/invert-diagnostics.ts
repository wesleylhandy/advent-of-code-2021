export function invertDiagnostics(diagnostics: string[] = []): number[] {
    if (diagnostics.length === 0) {
        return [];
    }
    const diagnosticsLength = diagnostics.length;
    const singleDiagnosticLength = diagnostics[0].length;
    const invertedDiagnostics = new Array<number>(singleDiagnosticLength);
    for (let i = 0; i < diagnosticsLength; i++) {
        for (let j = 0; j < singleDiagnosticLength; j++) {
            if (invertedDiagnostics[j]) {
                invertedDiagnostics[j] += Number.parseInt(diagnostics[i][j], 10);
            } else {
                invertedDiagnostics[j] = Number.parseInt(diagnostics[i][j], 10);
            }
        }
    }
    return invertedDiagnostics;
}
