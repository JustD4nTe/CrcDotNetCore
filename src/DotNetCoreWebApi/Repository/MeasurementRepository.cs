using DotNetCoreWebApi.DbContexts;
using DotNetCoreWebApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreWebApi.Repository
{
    public class MeasurementRepository : IMeasurementRepository<Measurement>
    {
        private readonly MeasurementContext _dbContext;

        public MeasurementRepository(MeasurementContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async Task<IEnumerable<Measurement>> GetAll()
        {
            return await _dbContext.Measurements.ToListAsync();
        }

        public async Task<Measurement> Get(long id)
        {
            return await _dbContext.Measurements.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task Add(Measurement entity)
        {
            await _dbContext.Measurements.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task Update(Measurement measurement, Measurement entity)
        {
            measurement.Name = entity.Name;
            measurement.Value = entity.Value;
            measurement.CreatedAt = entity.CreatedAt;
            measurement.CreatedBy = entity.CreatedBy;


            await _dbContext.SaveChangesAsync();
        }

        public async Task Delete(Measurement measurement)
        {
            _dbContext.Measurements.Remove(measurement);
            await _dbContext.SaveChangesAsync();
        }
    }
}
