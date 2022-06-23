namespace backend.Models
{
    public class INICIAR_SESION
    {
        public string email { get; set; }
        public string contrasena { get; set; }
    }

    public class INICIAR_SESION_RESPUESTA
    {
        public INICIAR_SESION_RESPUESTA(USUARIO usuario, string token) 
        { 
            this.usuario = usuario;
            this.token = token;
        }

        public USUARIO usuario { get; set; }
        public string token { get; set; } 
       
    }
}