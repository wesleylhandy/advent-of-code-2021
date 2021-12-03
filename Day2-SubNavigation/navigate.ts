import { getNavigationInstructions } from "./get-navigation-instructions";
import { Navigation, NavigationPosition } from "./navigation";

export function navigate(): NavigationPosition {
    const instructions = getNavigationInstructions();
    const navigationEngine = new Navigation();

    instructions.forEach(([direction, value]) => {
        navigationEngine[direction](value);
    });

    return navigationEngine.position;
}