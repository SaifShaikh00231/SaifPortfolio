<template>
    <div class="bg-black text-white font-['Nunito']">
        <section class="flex flex-col justify-between h-screen">
            <HeaderComponent />
            <HeroComponent @scrollToLatestWorks="scrollToLatestWorks"/>
            <LatestWorksComponent ref="latestWorks"/>
            <ContactComponent />
            <FooterComponent />
        </section>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import HeroComponent from './HeroComponent.vue';
import LatestWorksComponent from './LatestWorksComponent.vue';
import ContactComponent from './ContactComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
        HeroComponent,
        HeaderComponent,
        LatestWorksComponent,
        ContactComponent,
        FooterComponent
    },
    methods: {
        scrollToLatestWorks() {
            this.$refs.latestWorks.$el.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>