﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2LocalizationAspNetCore.Models
{
    public class Product
    {
        public long Id { get; set; }

        public long Name { get; set; }

        public long Description { get; set; }

        public string ImagePath { get; set; }

        public double PriceEUR { get; set; }

        public double PriceCHF { get; set; }
    }
}
