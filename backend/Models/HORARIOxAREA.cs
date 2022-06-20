namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HORARIOxAREA")]
    public partial class HORARIOxAREA
    {
        [Key]
        public int id_Horario { get; set; }

        public TimeSpan horaAbierto { get; set; }

        public TimeSpan horaCierre { get; set; }

        public int id_Area { get; set; }

        public virtual AREA AREA { get; set; }
    }
}
