--234 challenge : User-defined function
CREATE OR REPLACE FUNCTION fetch_total_payment(f_name TEXT, l_name TEXT)
RETURNS NUMERIC
LANGUAGE plpgsql
AS
$$
DECLARE
    total_payment NUMERIC;
BEGIN
    SELECT SUM(p.amount)
    INTO total_payment
    FROM payment p
    NATURAL JOIN customer c
    WHERE c.first_name = f_name AND c.last_name = l_name;
    RETURN total_payment;
END;
$$;


SELECT fetch_total_payment('AMY', 'LOPEZ');
