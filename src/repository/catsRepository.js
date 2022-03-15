class CatsRepository {
    constructor(){}

    wait = (delay, ...args) => new Promise((resolve, reject) => setTimeout( (args[0] ?? true) ? resolve : reject, delay, ...args));

    getAllCatsSync() {
       let now = Date.now();
       while(now + 2000 >= Date.now());
       return [
            {
                name: "Abyssinian",
                description:
                    "The Abyssinian is easy to care for, and a joy to have in your home.",
                image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            },
            {
                name: "Aegean",
                description:
                    "They are generally friendly toward people and can be excellent cats for families with children.",
                image: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
            },
            {
                name: "American Bobtail",
                description:
                    "They are extremely interactive cats that bond with their human family with great devotion.",
                image: "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
            },
            {
                name: "American Curl",
                description:
                    "Curls are very people-oriented, faithful, affectionate soulmates.",
                image: "https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"
            }
        ];
    }

    getAllCats(err) {
        return this.wait(0, err).then(() =>  [
            {
                name: "Abyssinian",
                description:
                    "The Abyssinian is easy to care for, and a joy to have in your home.",
                image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            },
            {
                name: "Aegean",
                description:
                    "They are generally friendly toward people and can be excellent cats for families with children.",
                image: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
            },
            {
                name: "American Bobtail",
                description:
                    "They are extremely interactive cats that bond with their human family with great devotion.",
                image: "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
            },
            {
                name: "American Curl",
                description:
                    "Curls are very people-oriented, faithful, affectionate soulmates.",
                image: "https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"
            }
        ]);
    }
}

export default CatsRepository;
