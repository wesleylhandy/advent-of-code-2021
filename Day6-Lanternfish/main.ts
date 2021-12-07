import { getLanternFishData } from "./get-lanternfish-data";
import { LanternFishLargeModel } from "./lanternfish-large-model";
import { LanternFishModel } from "./lanternfish-model";

function main() {
    const model = new LanternFishModel(getLanternFishData());

    const updatedPopulation = model.updateModelByDays(80);

    console.log("Initial Population: ", getLanternFishData().length);
    console.log('Population after 80 days: ', updatedPopulation);

    const largeModel = new LanternFishLargeModel(getLanternFishData());

    const updatedLargePopulation = largeModel.updateModelByDays(256);

    console.log('Population after 256 days: ', updatedLargePopulation);
}

main();