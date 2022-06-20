namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AUTORxEJEMPLAR")]
    public partial class AUTORxEJEMPLAR
    {
        [Key]
        public int id_autorEjemplar { get; set; }

        public int id_Autor { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual AUTOR AUTOR { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }
}
