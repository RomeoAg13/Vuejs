<template>
    <div id="app" class="signup-container">
        <h2>Sign up</h2>
        <form class="signup-form">
            <div class="inputText">
                <input type="text" v-model="email" placeholder="Email" required>
            </div>
            <div class="inputText">
                <input type="password" v-model="password" placeholder="Password with 6 characters" required>
            </div>
            <button type="submit">Signup</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>






<style>
.signup-container {
    width: 25%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top: auto;
    margin-top: 150px;
}

.signup-container h2 {
    margin-bottom: 20px;
    text-align: center;
}

.inputText {
    display: flex;
    justify-content: center;
}

.signup-form input {
    width: 60%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signup-form button {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin: auto;
    display: flex;
    justify-content: center;
}

.signup-form button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    text-align: center;
}
</style>
