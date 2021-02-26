class OperationFailed(Exception):
    pass

def failure():
    raise OperationFailed("failure")

if __name__ == "__main__":
    try:
        failure()
    except OperationFailed as e:
        print(f"Something went wrong: {str(e)}")
