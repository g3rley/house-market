def calculate_future_value(principal, interest_rate, years):
    interest_rate /= 100
    future_value = principal * (1 + interest_rate) ** years
    return future_value
