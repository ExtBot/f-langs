moment.locale('az', {
    months : 'Yanvar_Fevral_Mart_Aprel_May_İyun_İyul_Avqust_Sentyabr_Oktyabr_Noyabr_Dekabr'.split('_'),
    monthsShort : 'Yan_Fev_Mar_Apr_May_İyn_İyl_Avq_Sbt_Obr_Nbr_Dek'.split('_'),
    weekdays : 'Bazar_BazarErtəsri_Çərşənbəaxşamı_Çərşənbə_Cüməaxşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort : 'Bzr_Bzrt_Çəra_Çər_Cüma_Cüm_Şən'.split('_'),
    weekdaysMin : 'Bz_Bt_Ça_Ç_Ca_C_Ş'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [saat] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [saat] HH.mm'
    },
    meridiemParse: /sabah|öğlen|akşam|gece/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'səhər') {
            return hour;
        } else if (meridiem === 'günorta') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'axşam' || meridiem === 'gecə') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'sabah';
        } else if (hours < 15) {
            return 'günorta';
        } else if (hours < 19) {
            return 'axşam';
        } else {
            return 'gecə';
        }
    },
    calendar : {
        sameDay : '[Bugün] LT',
        nextDay : '[Sabah] LT',
        nextWeek : 'dddd [saat] LT',
        lastDay : '[dünən] LT',
        lastWeek : 'dddd [sonra] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s içində',
        past : '%s əvvəl',
        s : 'bir neçə saniyə',
        m : '1 dəqiqə',
        mm : '%d dəqiqə',
        h : '1 saat',
        hh : '%d saat',
        d : '1 gün',
        dd : '%d gün',
        M : 'ay',
        MM : '%d ay',
        y : 'yıl',
        yy : '%d il'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});
