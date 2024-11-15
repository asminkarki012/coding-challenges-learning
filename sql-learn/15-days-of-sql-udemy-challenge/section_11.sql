-- 199 challenge:OVER() with partition by
SELECT
  f.film_id,
  title,
  c.name,
  length as length_of_movie,
  ROUND(
    AVG(length) OVER (
      PARTITION BY
        c.name
    ),
    2
  ) AS avg_length_in_category
FROM
  film f
  LEFT JOIN film_category fc ON f.film_id = fc.film_id
  LEFT JOIN category c ON c.category_id = fc.category_id
ORDER BY
  f.film_id;

--challenge 202 : OVER with order by
SELECT
  flight_id,
  departure_airport,
  SUM(actual_arrival - scheduled_arrival) OVER (
    PARTITION BY
      departure_airport
    ORDER BY
      flight_id
  )
FROM
  flights;

--challenge 205 : RANK
SELECT * FROM
(SELECT
  cl.name,
  cl.country,
  COUNT(*) as most_sales,
  RANK() OVER (
    PARTITION BY
      country
    ORDER BY
      COUNT(*) DESC
  )
FROM
  customer_list cl
  INNER JOIN payment p ON p.customer_id = cl.id
GROUP BY
  cl.name,
  cl.country) top_customer
WHERE rank <= 3;
