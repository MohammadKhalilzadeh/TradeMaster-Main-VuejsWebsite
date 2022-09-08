import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Backbone.vue";
import TMP from "../components/Shopping.vue";
import ContactUs from "../components/Contact-Us.vue";
import Products from "../components/Products.vue";
import AdminPanel from "../components/AdminPanel.vue";
import TMProduct from "../admin/Products.vue";
import Allies from "../admin/Allies.vue";
import Orders from "../admin/Orders.vue";
import Bills from "../admin/Bills.vue";
import Tickets from "../admin/Tickets.vue";
import Identifications from "../admin/Identifications.vue";
import ProductDetails from "../views/Shop/Product-Details.vue";
import Admin from "../views/Admins";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/panel",
      name: "AdminPanel",
      component: AdminPanel,
      // beforeEnter: (to, from, next) => {
      //   if (store.state.authenticated == false) {
      //     next(false);
      //   } else {
      //     next();
      //   }
      // },
      children: [
        {
          path: "/panel/products",
          name: "TMProduct",
          component: TMProduct,
        },
        {
          path: "/panel/allies",
          name: "Allies",
          component: Allies,
        },
        {
          path: "/panel/orders",
          name: "Orders",
          component: Orders,
        },
        {
          path: "/panel/bills",
          name: "Bills",
          component: Bills,
        },
        {
          path: "/panel/identifications",
          name: "Identifications",
          component: Identifications,
        },
        {
          path: "/panel/tickets",
          name: "Tickets",
          component: Tickets,
        },
      ],
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/admins",
      name: "Admins",
      component: Admin,
    },
    {
      path: "/contactus",
      name: "Contact Us",
      component: ContactUs,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/TM-shopping",
      name: "TM Shopping",
      component: TMP,
    },
    {
      path: "/productdetails/?id=:id",
      name: "ProductDetails",
      component: ProductDetails,
    },
  ],
});
