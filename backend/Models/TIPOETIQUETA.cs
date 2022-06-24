namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TIPOETIQUETA")]
    public partial class TIPOETIQUETA
    {
        [Key]
        public int id_tipoEtiqueta { get; set; }

        [Column("tipoEtiqueta")]
        [Required]
        [StringLength(4)]
        public string tipoEtiqueta1 { get; set; }
    }
}
