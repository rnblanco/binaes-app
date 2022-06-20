namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class P_CLAVExEJEMPLAR
    {
        [Key]
        public int id_p_Clave { get; set; }

        [Required]
        [StringLength(30)]
        public string p_clave { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }
}
