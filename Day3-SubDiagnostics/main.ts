import { getDiagnosticReport } from "./get-diagnostic-report";
import { parseBinaryValues } from "./helpers";
import { lifeSupportRatingFromDiagnostics } from "./life-support";
import { powerConsumptionFromDiagnostics } from "./power-consumption";

function main() {
    const diagnostics = getDiagnosticReport();
    const powerConsumption = powerConsumptionFromDiagnostics(diagnostics);
    const lifeSupport = lifeSupportRatingFromDiagnostics(diagnostics);

    const parsedPowerConsumption = parseBinaryValues(powerConsumption);
    const parsedLifeSupport = parseBinaryValues(lifeSupport);

    console.log("Submarine Power Consumption: ", parsedPowerConsumption.epsilon * parsedPowerConsumption.gamma);
    console.log("Submarine Life Support: ", parsedLifeSupport.co2 * parsedLifeSupport.oxygen);
}

main();