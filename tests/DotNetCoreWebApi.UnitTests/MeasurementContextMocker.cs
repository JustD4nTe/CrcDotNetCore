using DotNetCoreWebApi.DbContexts;
using DotNetCoreWebApi.Model;
using DotNetCoreWebApi.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCoreWebApi.UnitTests
{
    public static class MeasurementContextMocker
    {
        public static IMeasurementRepository<Measurement> GetInMemoryMeasurementsRepository(string dbName)
        {
            var options = new DbContextOptionsBuilder<MeasurementContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            MeasurementContext measurementContext = new MeasurementContext(options);
            measurementContext.FillDatabase();

            return new MeasurementRepository(measurementContext);
        }
    }
}
