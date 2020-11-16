<template>
    <div class = "landing-page-main">
        <p> Hello World </p>
        <button>Get Started</button>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
    created() {
        console.log("Landing page running...");
    }
}
</script>

<style scoped>
.landing-page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>