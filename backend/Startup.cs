using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security;
using Microsoft.IdentityModel.Tokens;
using System.Text;

[assembly: OwinStartup(typeof(backend.Startup))]

namespace backend
{
    public class Startup
    {
        string host = "http://localhost:4200";
        const string key = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
        public void Configuration(IAppBuilder app)
        {
            var asegurandoLlave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

            app.UseJwtBearerAuthentication(
               new JwtBearerAuthenticationOptions
               {
                   AuthenticationMode = AuthenticationMode.Active,
                   TokenValidationParameters = new TokenValidationParameters()
                   {
                       ValidateIssuer = true, // Acreditador
                       ValidateAudience = true, // Acreditado
                       ValidateIssuerSigningKey = true,
                       ValidIssuer = host, // Acreditador
                       ValidAudience = host, // Acreditado
                       IssuerSigningKey = asegurandoLlave,
                   }
        });
        }
    }
}
