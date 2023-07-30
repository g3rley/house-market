from app.calculations import calculate_future_value


def calculate_rentability(
    rent_amount: float,
    property_purchase_amount: float,
    property_appreciation_rate: float,
    rental_interest_rate: float,
    investment_interest_rate: float,
) -> str:
    years = 20
    rent_value = rent_amount * 12
    property_future_value = calculate_future_value(
        property_purchase_amount, property_appreciation_rate, years
    )
    rental_future_value = calculate_future_value(
        rent_value, rental_interest_rate, years
    )
    investment_future_value = calculate_future_value(
        rent_value, investment_interest_rate, years
    )

    if property_future_value > rental_future_value + investment_future_value:
        return "Comprar o imóvel é mais rentável após 20 anos."
    else:
        return "Alugar o imóvel é mais rentável após 20 anos."