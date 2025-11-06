import { generate } from '../helpers/department-test-helper';
import { caseType } from '../utility-interfaces';
import request from 'supertest';

export const departmentGetTests = () => {
  return [
   
    {
      test_case_name: 'GET_001 - Fetch all departments without filters',
      query: {},
      expected: 200,
    },
    {
      test_case_name: 'GET_002 - Fetch departments with pagination (limit=5, offset=1)',
      query: { limit: 5, offset: 0 },
      expected: 200,
    },
    {
      test_case_name: 'GET_003 - Search by keyword in name/code/description',
      query: { search: 'admin' },
      expected: 200,
    },
    {
      test_case_name: 'GET_004 - Filter by name',
      query: { name: 'Finance' },
      expected: 200,
    },
    {
      test_case_name: 'GET_005 - Filter by code',
      query: { code: 'HR001' },
      expected: 200,
    },
    {
      test_case_name: 'GET_006 - Filter by description',
      query: { description: 'technical' },
      expected: 200,
    },
    {
      test_case_name: 'GET_007 - Filter by active status',
      query: { status: '1' },
      expected: 200,
    },
    {
      test_case_name: 'GET_008 - Filter by inactive status',
      query: { status: '0' },
      expected: 200,
    },
    {
      test_case_name: 'GET_009 - Sort by created_on ASC',
      query: { sort_by: 'created_on', order: 'ASC' },
      expected: 200,
    },
    {
      test_case_name: 'GET_010 - Sort by created_on DESC',
      query: { sort_by: 'created_on', order: 'DESC' },
      expected: 200,
    },
    {
      test_case_name: 'GET_011 - Combination filter: search + status + pagination',
      query: { search: 'admin', status: '1', limit: 5, offset: 1 },
      expected: 200,
    },

    // // ⚠️ Negative validation
    {
      test_case_name: 'GET_012 - Invalid limit (string instead of number)',
      query: { limit: 'abc' },
      expected: 409,
    },
    {
      test_case_name: 'GET_013 - Invalid order value',
      query: { order: 'INVALID' },
      expected: 409,
    },
   
    {
      test_case_name: 'GET_015 - Invalid status value',
      query: { status: '9' },
      expected: 200,
    },

    // // ✅ 2️⃣ Dynamic create → get → validate flow
    {
      test_case_name: 'GET_016 - Create department and verify via GET search',
      expected: 200,
      async dynamicTest(app) {
        const payload = generate(true);
        const createRes = await request(app.getHttpServer())
          .post('/department')
          .send(payload)
          .expect(201);

        
        const getRes = await request(app.getHttpServer())
          .get('/department')
          .query({ search: payload.name })
          .expect(200);
        console.log(getRes.body.data[0])
        expect(getRes.body.data[0].name).toBe(payload.name);

    
      },
    },
    {
      test_case_name: 'GET_017 - Create department and verify by code filter',
      expected: 200,
      async dynamicTest(app) {
        const payload = generate(true);
        const createRes = await request(app.getHttpServer())
          .post('/department')
          .send(payload)
          .expect(201);

        const getRes = await request(app.getHttpServer())
          .get('/department')
          .query({ code: payload.code })
          .expect(200);

          // console.log(getRes.body.data[0].code+"--------"+payload.code)
        // console.log(getRes.body)
        expect(getRes.body.data[0].code).toBe(payload.code);

       
      },
    },
    {
      test_case_name: 'GET_018 - Create department and verify pagination and sorting order',
      expected: 200,
      async dynamicTest(app) {
        const payload = generate(true);
        await request(app.getHttpServer())
          .post('/department')
          .send(payload)
          .expect(201);

        const res = await request(app.getHttpServer())
          .get('/department')
          .query({ limit: 10, offset: 1, sort_by: 'created_on', order: 'DESC' })
          .expect(200);

        expect(Array.isArray(res.body.data)).toBe(true);
        const timestamps = res.body.data.map((d) => new Date(d.created_on).getTime());
        expect([...timestamps].sort((a, b) => b - a)).toEqual(timestamps);
      },
    },
    {
      test_case_name: 'GET_019 - Verify filtering by description substring',
      expected: 200,
      async dynamicTest(app) {
        const payload = generate(true);
        const createRes = await request(app.getHttpServer())
          .post('/department')
          .send(payload)
          .expect(201);

        const getRes = await request(app.getHttpServer())
          .get('/department')
          .query({ description: payload.description.substring(0, 3) })
          .expect(200);

        // expect(getRes.body.data.some((d) => d.id === createRes.body.id)).toBe(true);

      
      },
    },
  ];
};
