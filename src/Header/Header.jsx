import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <span className={s.title}>Соцсеть имени React</span>
        <img
          className={s.logo}
          src="https://yandex.ru/images/_crpd/u9D8Nm354/d7c0262y/RU4JvhLgI3YP8iw6Q_jERxD0rJp4kvQ56B1qMVStqn7In4fjLkDmXOd6Gh9iqDPAaQQmO2etsNSXnLW6mWX4QwU7Ca_3wWOD22MpWtY9N_SzYl5Z2yUmPmofznREKH9PXG6G5Ziko_j1zQ3a4LuUgo4m9Ew3KQHTQ-0ifKuX-tZV7J8a8jAgU39Aa4ugeATHIUKca1lXdM2a7C9EBvlujgmN96XJAsPYtG0da3P5pkKctUctdQlwYSGOsd-4ZRhV1Y5ci9LCcHKcollasZhE1ENhf9uLhHaeeq1-Z8W6ng77n_eFyyBD-uReXopwiWYBztaGDJbZs4EA_kAfqbWadNbdfnvQkkMS7PMISlH6hpXAYRzZuLTkDGmvTKTGa2_ciZw1JVnx88lmDE5o8LuncozmJX92aYODwo_wXZj0WhRFvj3rkIDyQu2hK_jRSzQUQ5MuSohVBDxKLXx1dArfbDgvNdapc8Nat64fuVBY5LNchFZNNtjSY5HdgewJB-tn1z3f-dER8fD8UxpK01i2h6Lj7vmK1wWOucys1uY5T6-67MU16hAzuMZdn_lDaYdRPbUFLDfoosPTrtKN6PeY5Ob8fjmjs6EDnHPKesD4NnfDwc9IiIcGzugsTwakeExfS9w2txmzICs2jg97c6uX0360BRw1CkCCoS0gfLkGK_Qn_g5Y0cMSM7xxiCqRyhU1ccJ-CXmXdS06nZ-3ZiksDrg85ZT5YyBaJ7_tSOPqVWA_BzR9dzjCcLL-QA_o5Co3pryea4PAcxG84dtJA4oFd_BTLIjZRxb8KM5dxxeZrB74L1Tm2zKByba_XjnjmCfCLtbErNfKs4CiHvBumnRrVdV-_BnRMWLwjFHZWKMbN3Xzwi5ritSWzIh-b5aECn-OOd_HRPgQQXqkTl_YI6qVgowG9S13GBNDwHzBnXmXmyTXfc25kNLi0A-R-PlieLdVEvPvGpnHlN1aXdz25erdg"
        />
      </header>
    </div>
  );
};

export default Header;
