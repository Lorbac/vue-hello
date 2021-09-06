Vue.config.devtools = true;

const app = new Vue(
    {
        el:"#root",
        data: {
            message: "Ciao!",
            img: "https://img.huffingtonpost.com/asset/5cc1f76d260000530071078a.jpeg?ops=scalefit_630_noupscale"
        }
    }
)