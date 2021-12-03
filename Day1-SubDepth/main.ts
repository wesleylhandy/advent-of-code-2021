import { getDepthReadings } from './get-depth-readings';
import { getDepthsInWindowsOfThree } from './get-depths-in-windows-of-three';
import { timesDepthIncreased } from './times-depth-increased';

function main() {
    console.log('Number of Increases in Depth (all): ', timesDepthIncreased(getDepthReadings()));
    console.log('Number of Increases in Depth (3-reading-average)', timesDepthIncreased(getDepthsInWindowsOfThree()));
}

main();
