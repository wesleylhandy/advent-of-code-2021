import { navigate } from './navigate';

function main() {
    const finalPosition = navigate();
    console.log('Area of Submarine Navigation: ', finalPosition.depth * finalPosition.horizontal);
}

main();
