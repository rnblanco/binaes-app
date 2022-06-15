namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TipoColeccion")]
    public partial class TipoColeccion
    {
        [Key]
        public int id_tipo_coleccion { get; set; }

        [StringLength(200)]
        public string tipo_coleccion { get; set; }
    }
}
