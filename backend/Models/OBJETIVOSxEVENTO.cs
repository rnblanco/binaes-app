namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OBJETIVOSxEVENTO")]
    public partial class OBJETIVOSxEVENTO
    {
        [Key]
        public int id_Objetivo { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string Objetivo { get; set; }

        public int id_Evento { get; set; }

        public virtual EVENTO EVENTO { get; set; }
    }

    public partial class OBJETIVOSxEVENTO_E
    {
        [Key]
        public int id_Objetivo { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string Objetivo { get; set; }

        public virtual EVENTO_A EVENTO { get; set; }
    }
}
