import React from 'react';
function Testimonial() {
    return (
    <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold">Card</h2>

    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://blog.altiplano-voyage.com/wp-content/uploads/2017/03/tacos_plat_fotolia.jpg"
            class="  shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Tacos à l’unité</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
        Prix : 3€
        </h6>
        <p class="mb-4">
        Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.
        </p>
        <ul class="mb-0 flex justify-center">
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://m1.zeste.ca/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_0,y_200,w_3840,h_2160,c_crop/w_1200,h_630,c_scale/v1507131585/foodlavie/prod/sections/cuisine-mexicaine-742bf2ef"
            class=" shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Enchiladas</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
            Prix : 12€
        </h6>
        <p class="mb-4">
        Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.
        </p>
        <ul class="mb-0 flex justify-center">                             
        </ul>
      </div>
      <div class="mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://www.maya-authentique.com/app/uploads/sites/5/2019/12/enchiladas-cuisine-mexique.jpeg"
            class=" shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Mole poblano</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
            Prix : 15€
        </h6>
        <p class="mb-4">
        Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise.
        </p>
        <ul class="mb-0 flex justify-center">
        </ul>
      </div>
    </div>
  </section>
</div>
  );
}

export default Testimonial;