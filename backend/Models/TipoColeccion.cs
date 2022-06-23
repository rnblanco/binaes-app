namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TIPOCOLECCION")]
    public partial class TIPOCOLECCION
    {
        [Key]
        public int id_tipoColeccion { get; set; }

        [Column("tipoColeccion")]
        [StringLength(30)]
        public string tipoColeccion1 { get; set; }
    }
}
