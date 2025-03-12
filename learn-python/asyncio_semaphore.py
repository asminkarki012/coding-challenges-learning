import asyncio
import random


async def access_resource(semaphore, resource_id):
    async with semaphore:  # Acquire and release automatically
        print(f"Resource {resource_id} acquired")
        await asyncio.sleep(random.uniform(0.5, 2))  # Simulate work
        print(f"Resource {resource_id} released")


async def main():
    semaphore = asyncio.Semaphore(2)  # Allow 3 concurrent accesses
    tasks = [access_resource(semaphore, i) for i in range(5)]  # create 5 tasks.
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    asyncio.run(main())
