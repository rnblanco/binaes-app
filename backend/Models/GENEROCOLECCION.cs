namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("GENEROCOLECCION")]
    public partial class GENEROCOLECCION
    {
        [Key]
        public int id_generoColeccion { get; set; }

        [Column("generoColeccion")]
        [Required]
        [StringLength(30)]
        public string generoColeccion1 { get; set; }

    }
}
