import { FieldOfVents } from "./field-of-vents";
import { getCoordinateData } from "./get-coordinate-data";

function main() {
    const ventField = new FieldOfVents(getCoordinateData());

    console.log(ventField.numberOfOverlappingVents);
}

main();