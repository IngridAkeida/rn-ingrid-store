import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Electronics',
            cover: 'https://picsum.photos/id/0/1000/300'
        },
        {
            id: 2,
            title: 'Landscapes',
            cover: 'https://picsum.photos/id/10/1000/300'
        },
        {
            id: 3,
            title: 'Accessories',
            cover: 'https://picsum.photos/id/21/1000/300'
        }
    ],
    products: [
        { id: 4, idCategory: 1, image: "https://picsum.photos/id/3/200/200", title: "4K Camera", description: "Ultra HD recording, professional quality.", price: 499.99 },
        { id: 23, idCategory: 3, image: "https://picsum.photos/id/22/200/200", title: "Sunglasses", description: "UV protection, modern design, lightweight frame.", price: 49.99 },
        { id: 15, idCategory: 2, image: "https://picsum.photos/id/14/200/200", title: "Green Forest", description: "Natural refuge, ideal for hiking and exploration.", price: 34.99 },
        { id: 9, idCategory: 1, image: "https://picsum.photos/id/8/200/200", title: "Wi-Fi Router", description: "Stable connection, wide coverage, multiple devices.", price: 79.99 },
        { id: 12, idCategory: 2, image: "https://picsum.photos/id/11/200/200", title: "Snowy Mountain", description: "High peak, winter sports, natural beauty.", price: 59.99 },
        { id: 6, idCategory: 1, image: "https://picsum.photos/id/5/200/200", title: "10\" Tablet", description: "Bright display, ideal for entertainment and productivity.", price: 299.99 },
        { id: 21, idCategory: 3, image: "https://picsum.photos/id/20/200/200", title: "Leather Bag", description: "Classic design, spacious and elegant for use.", price: 89.99 },
        { id: 25, idCategory: 3, image: "https://picsum.photos/id/24/200/200", title: "Stylish Hat", description: "Sun protection, casual and stylish look.", price: 19.99 },
        { id: 5, idCategory: 1, image: "https://picsum.photos/id/4/200/200", title: "Smartwatch", description: "Health monitoring and smart notifications.", price: 149.99 },
        { id: 8, idCategory: 1, image: "https://picsum.photos/id/7/200/200", title: "Console X", description: "Advanced graphics, extensive game library.", price: 399.99 },
        { id: 24, idCategory: 3, image: "https://picsum.photos/id/23/200/200", title: "Slim Wallet", description: "Compact and practical, durable material.", price: 29.99 },
        { id: 28, idCategory: 3, image: "https://picsum.photos/id/30/200/200", title: "Leather Belt", description: "High quality, adjustable buckle, durable.", price: 24.99 },
        { id: 3, idCategory: 1, image: "https://picsum.photos/id/2/200/200", title: "Bluetooth Headphones", description: "Crystal clear sound, active noise cancellation.", price: 199.99 },
        { id: 18, idCategory: 2, image: "https://picsum.photos/id/17/200/200", title: "Majestic Waterfall", description: "Impressive waterfall, natural spectacle.", price: 64.99 },
        { id: 30, idCategory: 3, image: "https://picsum.photos/id/39/200/200", title: "Winter Gloves", description: "Lined, comfortable, keeps warm in cold weather.", price: 19.99 },
        { id: 11, idCategory: 2, image: "https://picsum.photos/id/10/200/200", title: "Tropical Beach", description: "White sand, crystal-clear waters, paradise setting.", price: 49.99 },
        { id: 19, idCategory: 2, image: "https://picsum.photos/id/18/200/200", title: "Sunset", description: "Vibrant colors, breathtaking and serene horizon.", price: 24.99 },
        { id: 16, idCategory: 2, image: "https://picsum.photos/id/15/200/200", title: "Deep Canyon", description: "Impressive rock formations, spectacular view.", price: 54.99 },
        { id: 14, idCategory: 2, image: "https://picsum.photos/id/13/200/200", title: "Flower Field", description: "Vibrant colors, natural beauty, fresh air.", price: 29.99 },
        { id: 29, idCategory: 3, image: "https://picsum.photos/id/36/200/200", title: "Elegant Necklace", description: "Sophisticated design, charm, and refinement.", price: 44.99 },
        { id: 1, idCategory: 1, image: "https://picsum.photos/id/0/200/200", title: "Smartphone X1", description: "High performance, AMOLED screen, advanced camera.", price: 599.99 },
        { id: 2, idCategory: 1, image: "https://picsum.photos/id/1/200/200", title: "Laptop Pro", description: "Elegant design, i7 processor, 16GB RAM.", price: 1299.99 },
        { id: 7, idCategory: 1, image: "https://picsum.photos/id/6/200/200", title: "50\" LED TV", description: "Vivid image, 4K resolution, streaming services.", price: 799.99 },
        { id: 17, idCategory: 2, image: "https://picsum.photos/id/16/200/200", title: "Golden Desert", description: "Endless dunes, arid and fascinating landscape.", price: 44.99 },
        { id: 13, idCategory: 2, image: "https://picsum.photos/id/12/200/200", title: "Serene Lake", description: "Calm waters, tranquility, and peace of mind.", price: 39.99 },
        { id: 22, idCategory: 3, image: "https://picsum.photos/id/21/200/200", title: "Sports Watch", description: "Stopwatch, water-resistant, comfortable strap.", price: 59.99 },
        { id: 10, idCategory: 1, image: "https://picsum.photos/id/9/200/200", title: "Pro Drone", description: "Precise flight, HD camera, intuitive controls.", price: 699.99 },
        { id: 26, idCategory: 3, image: "https://picsum.photos/id/25/200/200", title: "Silk Scarf", description: "Soft touch, sophisticated prints, elegant.", price: 14.99 },
        { id: 27, idCategory: 3, image: "https://picsum.photos/id/26/200/200", title: "Silver Bracelet", description: "Delicate details, sophistication, and style.", price: 39.99 },
        { id: 20, idCategory: 2, image: "https://picsum.photos/id/19/200/200", title: "Wheat Fields", description: "Tranquil pastoral scenes, gentle breeze.", price: 31.99 }
    ]
}
