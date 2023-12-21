from datetime import datetime
from enum import Enum
from typing import Any

from pydantic import BaseModel, Extra


class SchemaStatus(Enum):
    NOT_SYNCHRONIZED = "NOT_SYNCHRONIZED"
    SYNCHRONIZING = "SYNCHRONIZING"
    SYNCHRONIZED = "SYNCHRONIZED"
    DEPRECATED = "DEPRECATED"
    FAILED = "FAILED"


class ColumnDescription(BaseModel):
    name: str | None
    description: str | None
    is_primary_key: bool | None
    data_type: str | None
    low_cardinality: bool | None
    categories: list[str] | None
    forengin_key: dict | None


class TableDescriptionMetadata(BaseModel):
    dh_internal: dict[str, Any] | None

    class Config:
        extra = Extra.allow


class BaseTableDescription(BaseModel):
    id: str
    db_connection_id: str | None
    description: str | None
    columns: list[ColumnDescription] | None
    examples: list | None
    table_name: str | None
    status: SchemaStatus | None
    last_schema_sync: datetime | None
    created_at: datetime | None

    class Config:
        extra = Extra.ignore


class TableDescription(BaseTableDescription):
    metadata: TableDescriptionMetadata | None
