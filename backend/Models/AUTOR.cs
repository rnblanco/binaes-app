namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AUTOR")]
    public partial class AUTOR
    {
        [Key]
        public int id_Autor { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }        
    }
}
