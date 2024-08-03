# Quickbite - Food Ordering App

Welcome to **Quickbite**, a seamless food ordering app that allows users to browse, filter, and order a variety of foods. Quickbite ensures a smooth user experience with persistent cart data and secure payment handling.

## Description

Quickbite is a food ordering app that allows user login and registration. It shows a variety of foods that users can filter and order, with payment handled by Stripe. Users can view their order history, check the status of their orders, and the delivery status. The cart data is stored in the backend to prevent loss even if the browser is refreshed. The app also contains an admin panel with passkey authentication where the admin can add different foods, list all foods, track orders, and update the status of orders.

## Features

### For Users:
- **User Registration and Login:** Secure user authentication.
- **Browse and Filter Foods:** Explore a wide variety of foods.
- **Order Foods:** Seamlessly order your favorite dishes.
- **Stripe Payment Integration:** Secure payment processing with Stripe.
- **Order History:** View your past orders and their statuses.
- **Persistent Cart Data:** Cart data is stored in the backend and remains intact even if the browser is refreshed.

### For Admin:
- **Admin Panel:** Secure admin access with passkey authentication.
- **Add Foods:** Add new food items to the menu.
- **List Foods:** View all available foods.
- **Track and Update Orders:** Monitor and update the status of orders.

## Technologies Used

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB setup
- Stripe account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/lingeshnafeax/quickbite.git
    cd quickbite
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Setup environment variables:
    Create a `.env` file in the root directory and add your MongoDB, Stripe, and other necessary credentials.
    ```plaintext
    MONGODB_URI=<Your MongoDB URI>
    STRIPE_SECRET_KEY=<Your Stripe Secret Key>
    ADMIN_PASSKEY=<Your Admin Passkey>
    ```

4. Run the application:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### User Interface
- Register or log in to access your account.
- Browse and filter through a variety of food items.
- Add desired food items to your cart and proceed to checkout using Stripe for secure payment.
- View your order history and track the status of your deliveries.

### Admin Panel
- Log in as an admin using the passkey to access the admin panel.
- Add new food items to the menu.
- List all available foods.
- Track and update the status of customer orders.

## Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/d4564d53-4381-4899-93cd-befbe3e05da0)

### Food Gallery
![Food Gallery](https://github.com/user-attachments/assets/183ce62f-751b-42ad-a40d-3f56cc96430d)

### Cart Page
![Cart Page](https://github.com/user-attachments/assets/1be673d7-bce4-4c62-a1d4-5851a6769d26)

### Orders Page
![Screenshot (49)](https://github.com/user-attachments/assets/08bfae93-b030-4542-9229-7dcffb625028)


### Admin Food Panel
![Admin Food Handling](https://github.com/user-attachments/assets/cc03bfe6-f219-4b6d-9ff1-880d58d00b29)



## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact:
- Email: [wlingesh260@gmail.com](mailto:wlingesh260@gmail.com)
- LinkedIn: [Lingesh Patturaj](https://www.linkedin.com/in/lingeshpatturaj)

---

Thank you for using Quickbite! Enjoy your meals with just a few clicks.
