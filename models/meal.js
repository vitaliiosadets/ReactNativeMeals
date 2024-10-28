class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        Object.assign(this, {
            id, categoryIds,
            title,
            affordability,
            complexity,
            imageUrl,
            duration,
            ingredients,
            steps,
            isGlutenFree,
            isVegan,
            isVegetarian,
            isLactoseFree
        })
        this.id = id;

    }
}

export default Meal;
