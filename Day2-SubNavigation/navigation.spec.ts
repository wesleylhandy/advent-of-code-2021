import { Navigation } from "./navigation";

describe(Navigation, () => {
    it('returns a navigation instance', () => {
        // Given
        // When
        const result = new Navigation();

        // Then
        expect(result).toBeInstanceOf(Navigation);
    });

    it('increments horizontal position on forward', () => {
        // Given
        const forwardValue = 2;
        const navigation = new Navigation();
        // When
        navigation.forward(forwardValue);

        // Then
        expect(navigation.position).toStrictEqual({
            horizontal: 2,
            depth: 0,
            aim: 0,
        });
    });

    it('increments aim position on down', () => {
        // Given
        const value = 3;
        const navigation = new Navigation();
        // When
        navigation.down(value);

        // Then
        expect(navigation.position.aim).toStrictEqual(3);
    });

    it('decrements aim position on up', () => {
        // Given
        const downValue = 3;
        const upValue = 2;
        const navigation = new Navigation();
        // When
        navigation.down(downValue);
        navigation.up(upValue);

        // Then
        expect(navigation.position.depth).toStrictEqual(1);
    });

    it('updates depth on aim and horizontal change', () => {
         // Given
         const downValue = 3;
         const forwardValue = 2;
         const navigation = new Navigation();
         // When
         navigation.down(downValue);
         navigation.forward(forwardValue);
 
         // Then
         expect(navigation.position.depth).toStrictEqual(6);
    });
});