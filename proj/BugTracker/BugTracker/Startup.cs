using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BugTracker.Data;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using System;
using Newtonsoft.Json.Serialization;

namespace BugTracker
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("https://localhost:5001",
                                                          "http://localhost:3000")
                                        .AllowAnyMethod()
                                        //.WithExposedHeaders("content-disposition")
                                        .AllowAnyHeader()
                                        .AllowCredentials();
                                  });
            });

            services.AddDbContext<BugTrackerContext>(opt =>
             opt.UseMySQL(Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers()
                //.AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
                .AddNewtonsoftJson(s => s.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());
            services.AddControllers(options => options.SuppressAsyncSuffixInActionNames = false);

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<ITicketRepo, SqlTicketRepo>();
            services.AddScoped<ITeamRepo, SqlTeamRepo>();
            services.AddScoped<ICommentRepo, SqlCommentRepo>();
            services.AddScoped<IAccountRepo, SqlAccountRepo>();
            services.AddScoped<IAttachmentRepo, SqlAttachmentRepo>();
            services.AddScoped<IAssignmentRepo, SqlAssignmentRepo>();
            services.AddScoped<ISprintRepo, SqlSprintRepo>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
