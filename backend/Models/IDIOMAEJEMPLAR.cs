namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("IDIOMAEJEMPLAR")]
    public partial class IDIOMAEJEMPLAR
    {
        [Key]
        public int id_idiomaEjemplar { get; set; }

        [Required]
        [StringLength(30)]
        public string idioma { get; set; }
    }
}
